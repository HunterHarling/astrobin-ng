export interface UserProfileInterface {
  id: number;
  deleted: Date;
  updated: Date;
  realName: string;
  website: string;
  job: string;
  hobbies: string;
  timezone: string;
  about: string;
  premiumOffer: string;
  premiumOfferExpiration: Date;
  premiumOfferSent: Date;
  companyName: string;
  companyDescription: string;
  companyWebsite: string;
  retailerCountry: string;
  avatar: string;
  excludeFromCompetition: boolean;
  defaultFrontPageSection: string;
  defaultGallerySorting: number;
  defaultLicense: number;
  defaultWatermarkText: string;
  defaultWatermark: boolean;
  defaultWatermarkSize: string;
  defaultWatermarkPosition: number;
  defaultWatermarkOpacity: number;
  acceptTos: boolean;
  receiveNewsletter: boolean;
  receiveImportantCommunications: boolean;
  receiveMarketingAndCommercialMaterial: boolean;
  allowAstronomyAds: boolean;
  inactiveAccountReminderSent: Date;
  language: string;
  seenRealName: boolean;
  seenEmailPermissions: boolean;
  signature: string;
  signatureHtml: string;
  showSignatures: boolean;
  postCount: number;
  autoSubscribe: boolean;
  receiveForumEmails: boolean;
  user: number;
  telescopes: number[];
  mounts: number[];
  cameras: number[];
  focalReducers: number[];
  software: number[];
  filters: number[];
  accessories: number[];
  astroBinIndex?: number;
  followers?: number;
  premiumCounter: number;
}
