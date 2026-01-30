export const dynamic = 'force-dynamic';

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://decimetarkvadratni.com';
  const now = new Date();

  return [
    {
      url: baseUrl, // Serbian homepage (default, no prefix)
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          sr: baseUrl,
          en: `${baseUrl}/en`,
        }
      },
    },
    {
      url: `${baseUrl}/en`, // English homepage
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          sr: baseUrl,
          en: `${baseUrl}/en`,
        }
      },
    },
    {
      url: `${baseUrl}/politika-privatnosti`, // Serbian privacy policy
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          sr: `${baseUrl}/politika-privatnosti`,
          en: `${baseUrl}/en/privacy-policy`,
        }
      },
    },
    {
      url: `${baseUrl}/en/privacy-policy`, // English privacy policy
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          sr: `${baseUrl}/politika-privatnosti`,
          en: `${baseUrl}/en/privacy-policy`,
        }
      },
    }
  ]
}