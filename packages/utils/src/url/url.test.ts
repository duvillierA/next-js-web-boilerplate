import { describe, expect, it } from 'vitest'
import { HttpUrlBuilder } from './index'

const options = {
  fallback: 'http://localhost:4000',
  vercelEnv: 'production',
  url: 'myapp.vercel.app',
  prodUrl: 'myapp.com',
} as const

describe('HttpUrl', () => {
  describe('constructor', () => {
    it('should set fallback, vercelEnv, url, and prodUrl from options', () => {
      const httpUrl = new HttpUrlBuilder(options)
      expect(httpUrl.fallback).toBe(options.fallback)
      expect(httpUrl.vercelEnv).toBe(options.vercelEnv)
      expect(httpUrl.url).toBe(options.url)
      expect(httpUrl.prodUrl).toBe(options.prodUrl)
    })

    it('should default fallback to http://localhost:3000 if not provided', () => {
      const httpUrl = new HttpUrlBuilder({})
      expect(httpUrl.fallback).toBe('http://localhost:3000')
    })
  })

  describe('buildHttpUrl', () => {
    it('should build a URL from base and pathname', () => {
      const url = HttpUrlBuilder.buildHttpUrl({
        base: 'https://example.com',
        pathname: '/api/test',
      })
      expect(url.toString()).toBe('https://example.com/api/test')
    })

    it('should accept a URL object as base', () => {
      const base = new URL('https://foo.com/bar/')
      const url = HttpUrlBuilder.buildHttpUrl({
        base,
        pathname: 'baz',
      })
      expect(url.toString()).toBe('https://foo.com/bar/baz')
    })
  })

  describe('getHttpUrl', () => {
    it('should use prodUrl in production', () => {
      const httpUrl = new HttpUrlBuilder({
        fallback: 'http://localhost:3000',
        vercelEnv: 'production',
        url: 'myapp.vercel.app',
        prodUrl: 'myapp.com',
      })
      const url = httpUrl.getHttpUrl({ pathname: '/foo' })
      expect(url.toString()).toBe('https://myapp.com/foo')
    })

    it('should fallback to url in production if prodUrl is not set', () => {
      const httpUrl = new HttpUrlBuilder({
        fallback: 'http://localhost:3000',
        vercelEnv: 'production',
        url: 'myapp.vercel.app',
      })
      const url = httpUrl.getHttpUrl({ pathname: '/bar' })
      expect(url.toString()).toBe('https://myapp.vercel.app/bar')
    })

    it('should use url in development', () => {
      const httpUrl = new HttpUrlBuilder({
        fallback: 'http://localhost:3000',
        vercelEnv: 'development',
        url: 'dev.vercel.app',
      })
      const url = httpUrl.getHttpUrl({ pathname: '/dev' })
      expect(url.toString()).toBe('https://dev.vercel.app/dev')
    })

    it('should use url in preview', () => {
      const httpUrl = new HttpUrlBuilder({
        fallback: 'http://localhost:3000',
        vercelEnv: 'preview',
        url: 'preview.vercel.app',
      })
      const url = httpUrl.getHttpUrl({ pathname: '/preview' })
      expect(url.toString()).toBe('https://preview.vercel.app/preview')
    })

    it('should use fallback if vercelEnv is not set', () => {
      const httpUrl = new HttpUrlBuilder({
        fallback: 'http://localhost:5000',
      })
      const url = httpUrl.getHttpUrl({ pathname: '/fallback' })
      expect(url.toString()).toBe('http://localhost:5000/fallback')
    })

    it('should use fallback if vercelEnv is unknown', () => {
      const httpUrl = new HttpUrlBuilder({
        fallback: 'http://localhost:6000',
        // @ts-expect-error: testing unknown env
        vercelEnv: 'staging',
      })
      const url = httpUrl.getHttpUrl({ pathname: '/unknown' })
      expect(url.toString()).toBe('http://localhost:6000/unknown')
    })

    it('should default pathname to empty string', () => {
      const httpUrl = new HttpUrlBuilder({
        fallback: 'http://localhost:7000',
      })
      const url = httpUrl.getHttpUrl()
      expect(url.toString()).toBe('http://localhost:7000/')
    })
  })

  describe('getCDNUrl', () => {
    it('should return a CDN URL in production', () => {
      const httpUrl = new HttpUrlBuilder({
        fallback: 'http://localhost:3000',
        vercelEnv: 'production',
        cdnUrl: 'https://cdn.example.com',
      })
      const url = httpUrl.getCDNUrl()
      expect(url?.toString()).toBe('https://cdn.example.com/')
    })
    it('should return a CDN URL in production with pathname', () => {
      const httpUrl = new HttpUrlBuilder({
        fallback: 'http://localhost:3000',
        vercelEnv: 'production',
        cdnUrl: 'https://cdn.example.com',
      })
      const url = httpUrl.getCDNUrl({ pathname: '/assets/logo.png' })
      expect(url?.toString()).toBe('https://cdn.example.com/assets/logo.png')
    })

    it('should return null if cdnUrl is not set', () => {
      const httpUrl = new HttpUrlBuilder({
        fallback: 'http://localhost:3000',
        vercelEnv: 'production',
      })
      const url = httpUrl.getCDNUrl()
      expect(url).toBeNull()
    })

    it('should return null in development', () => {
      const httpUrl = new HttpUrlBuilder({
        fallback: 'http://localhost:3000',
        vercelEnv: 'development',
        cdnUrl: 'https://cdn.example.com',
      })
      const url = httpUrl.getCDNUrl()
      expect(url).toBeNull()
    })

    it('should return null if vercelEnv is not set', () => {
      const httpUrl = new HttpUrlBuilder({
        fallback: 'http://localhost:3000',
      })
      const url = httpUrl.getCDNUrl()
      expect(url).toBeNull()
    })

    it('should return null if vercelEnv is unknown', () => {
      const httpUrl = new HttpUrlBuilder({
        fallback: 'http://localhost:3000',
        // @ts-expect-error: testing unknown env
        vercelEnv: 'staging',
      })
      const url = httpUrl.getCDNUrl()
      expect(url).toBeNull()
    })
  })
})
