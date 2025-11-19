import { Timestamp } from 'firebase/firestore';
/**
 * Represents a media file in the library.
 */
export interface Media {
    /** Unique identifier for the media file. */
    id: string;
    /** Name of the media file. */
    name: string;
    /** Display title of the media file. */
    title: string;
    /** MIME type of the media file (e.g., 'image/jpeg', 'video/mp4'). */
    type: string;
    /** Size of the media file in bytes. */
    size: number;
    /** Duration of the media content in seconds (for audio/video files). */
    duration?: number;
    /** ID of the company that owns the media file. */
    companyId: string;
    /** Date when the media file was uploaded. */
    uploadDate: Timestamp;
    /** URL to access the media file. */
    url: string;
    /** ID of the user who uploaded the media file. */
    uploadedBy: string;
    /** Date when the media file was last modified. */
    modifiedDate: Timestamp;
    deleted: boolean;
    dateDeleted: Timestamp;
}
//# sourceMappingURL=types.d.ts.map