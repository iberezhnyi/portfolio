// works
export interface IProject {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: IStack[];
  image: string;
  live: string;
  github: string;
}

interface IStack {
  name: string;
}

// resume
export interface IAboutMe {
  title: string;
  description: string;
  info: IInfoField[];
}

interface IInfoField {
  fieldName: string;
  fieldValue: string;
}

export interface IExperience {
  icon: string;
  title: string;
  description: string;
  items: IExperienceItem[];
}

interface IExperienceItem {
  company: string;
  position: string;
  duration: string;
}

export interface IEducation {
  icon: string;
  title: string;
  description: string;
  items: IEducationItem[];
}

interface IEducationItem {
  institution: string;
  degree: string;
  duration: string;
}

export interface ISkills {
  title: string;
  description: string;
  skillList: ISkill[];
}

interface ISkill {
  icon: JSX.Element;
  name: string;
}
