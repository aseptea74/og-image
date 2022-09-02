export type FileType = 'png' | 'jpeg';
export type Theme = 'light' | 'dark';
export type ImgType = 'og' | 'download' | 'poster' | 'badge';

export type OgRequest = {
  displayName: string;
  displayNameType?: 'ENS' | 'GENERAL';
  avatar: string;
  avatarType?: 'NFT' | 'GENERAL';
  title?: string;
  organization?: string;
  handle?: string;
  type?: 'ORG' | 'PERSONAL';
  isVerified?: boolean;
  // imgType: "og";
};
export enum PosterType {
  Standard = 'Standard',
  HighlightBadge = 'HighlightBadge',
  HighlightGuests = 'HighlightGuests',
  Minimal = 'Minimal',
}
export type Speakers = {
  avatar: string;
  name: string;
  title: string;
};
export type PosterRequest = {
  posterType: PosterType;
  bgType: number;
  bgNumber: number;
  eventTitle: string;
  time: number;
  place: 'twitter' | 'discord';
  raffleText: string;
  orgLogo: string;
  orgName: string;
  speakers: Speakers[];
  isBadgePreview?: boolean;
};

export type BadgeRequest = {
  bg: number;
  shape: number;
  maskType: number;
  textStyle: number;
  text: string;
  logoUrl: string;
  bgUrl?: string;
  textColor: TextColors;
};

export type ParsedRequest = OgRequest | PosterRequest | BadgeRequest;

export type TextColors = 'white' | 'black';
export type Place = 'twitter' | 'discord';
