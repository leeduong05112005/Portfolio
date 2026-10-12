import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { profile } from './profile'

export interface SocialLink {
  label: string
  href: string
  icon: IconProp
  external: boolean
}

/** Tạo danh sách icon liên hệ từ profile. Link nào để trống sẽ tự bị ẩn. */
export function buildSocials(): SocialLink[] {
  const list: SocialLink[] = []
  if (profile.links.github) list.push({ label: 'GitHub', href: profile.links.github, icon: ['fab', 'github'], external: true })
  if (profile.links.linkedin) list.push({ label: 'LinkedIn', href: profile.links.linkedin, icon: ['fab', 'linkedin-in'], external: true })
  if (profile.links.facebook) list.push({ label: 'Facebook', href: profile.links.facebook, icon: ['fab', 'facebook-f'], external: true })
  list.push({ label: 'Email', href: `mailto:${profile.email}`, icon: ['fas', 'envelope'], external: false })
  return list
}
