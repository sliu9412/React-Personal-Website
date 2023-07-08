interface IAboutMySelf {
  title: string;
  leftImagePath: string;
  rightHTML: string;
}

interface IAboutTeniqures {
  name: string;
  imagePath: string;
  desc: string;
}

interface IAboutSkills {
  name: string;
  rating: number;
}

export interface IAboutEducation {
  name: string;
  imagePath: string;
  time: string;
  degree: string;
  desc: string;
}

export interface IAboutWorkingExperience {
  name: string;
  imagePath: string;
  time: string;
  type: string;
  location: string;
  desc: string;
}

export interface IAboutPage {
  AboutMySelf: IAboutMySelf;
  Highlight: {
    title: string;
    list: string[];
  };
  Education: {
    title: string;
    list: IAboutEducation[];
  };
  Techniques: {
    title: string;
    list: IAboutTeniqures[];
  };
  Skills: {
    title: string;
    list: IAboutSkills[];
  };
  WorkingExperience: {
    title: string;
    list: IAboutWorkingExperience[];
  };
}

export interface IAboutProps {
  about: IAboutPage;
}
