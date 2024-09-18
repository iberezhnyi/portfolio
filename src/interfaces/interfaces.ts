import { ReactNode } from 'react'

export interface ILinkItem {
  name: string
  path: string
}

// home
export interface IStat {
  num: number
  text: string
}

export interface ISocial {
  icon: ReactNode
  path: string
}

// works
export interface IProject {
  num: string
  category: string
  title: string
  description: string
  stack: IStack[]
  image: string
  live: string
  github: string
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
  items: IExperienceItem[]
}

interface IExperienceItem {
  company: string
  position: string
  duration: string
}

export interface IEducation {
  title: string
  description: string
  items: IEducationItem[]
}

interface IEducationItem {
  institution: string
  degree: string
  duration: string
}

export interface ISkills {
  title: string
  description: string
  skillList: ISkill[]
}

interface ISkill {
  icon: ReactNode
  name: string
}

// contacts
export interface IContactInfoItem {
  icon: ReactNode
  title: string
  description: string
}
