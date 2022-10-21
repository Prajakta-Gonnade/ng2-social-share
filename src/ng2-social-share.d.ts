import { FacebookParams } from './facebookParams';
import { GooglePlusParams } from './googlePlusParams';
import { LinkedinParams } from './linkedinParams';
import { PinterestParams } from './pinterestParams';
import { TwitterParams } from './twitterParams';
import { WhatsappParams } from './whatsappParams';
export declare class CeiboShare {
    facebook: FacebookParams;
    twitter: TwitterParams;
    googlePlus: GooglePlusParams;
    pinterest: PinterestParams;
    linkedIn: LinkedinParams;
    whatsapp: WhatsappParams;
    shareWidth: string;
    shareHeight: string;
    private sharers;
    constructor();
    private urlSharer(sharer);
    private getSharer();
    share(): void | boolean;
}
