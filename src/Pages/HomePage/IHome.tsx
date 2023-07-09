export interface ICaption {
  backgroundImagePath: string;
  mainCaption: string;
  subCaption: string;
  subCaption2: string;
  subCaption2HTML: string;
}

export interface IAboutSection {
  leftHTML: string;
  rightImagePath: string;
}

export interface IHomePage {
  Caption: ICaption;
  AboutMeSection: IAboutSection;
  Footer: string;
}

export interface IHomePageProps {
  homepage: IHomePage;
}
