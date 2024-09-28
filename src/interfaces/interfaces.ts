import { socialsIconMap } from '@/components/common/Socials'
// import { techIconMap } from '@/components/resume/Skills'
import { contactsIconMap } from '@/components/contacts/ContactsList'

export interface ILinkItem {
  name: string
  path: string
}

// common
export interface ISocial {
  icon: keyof typeof socialsIconMap
  path: string
}

// home
export interface IStat {
  num: number
  text: string
}

// services
export interface IService {
  num: string
  title: string
  description: string
  href: string
}

// Projects
export interface IProject {
  num: string
  category: string
  title: string
  team: boolean
  description: string
  stack: IStack[]
  image: string
  live: string
  github: IGithubLinks
}

interface IGithubLinks {
  frontend?: string
  backend?: string
}

interface IStack {
  name: string
}

// resume
export interface IAboutMe {
  title: string
  description: string
  info: IInfoField[]
}

interface IInfoField {
  fieldName: string
  fieldValue: string
}

export interface IExperience {
  title: string
  description: string
  items: ICompanyItem[]
}

interface ICompanyItem {
  company: string
  position: string
  description: string[]
  duration: string
}

export interface IEducation {
  title: string
  description: string
  items: IInstitutionItem[]
}

interface IInstitutionItem {
  institution: string
  degree: string
  description: string[]
  duration: string
}

export interface ISkills {
  title: string
  description: string
  skillList: ISkill[]
}

interface ISkill {
  // icon: keyof typeof techIconMap
  icon: string
  name: string
}

export interface ITechnology {
  name: string
  icon: string
}

// contacts
export interface IContactInfoItem {
  icon: keyof typeof contactsIconMap
  title: string
  description: string
  href: string
}

export interface IContactFormDataDto {
  firstname: string
  lastname: string
  email: string
  phone: string
  message: string
}

export interface IMessageTemplate extends Partial<IContactFormDataDto> {
  name: string
  fromMail?: string
  fromName?: string
}
