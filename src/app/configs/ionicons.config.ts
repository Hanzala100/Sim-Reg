import { addIcons } from 'ionicons';
import {
    personOutline,
    calendarOutline,
    peopleOutline,
    chevronDownOutline,
    callOutline,
    mailOutline,
    locationOutline,
    businessOutline,
    mapOutline,
    mailUnreadOutline,
    homeOutline,
    cardOutline,
    fingerPrintOutline,
    medicalOutline,
    checkmarkCircleOutline,
    syncOutline,
    refreshOutline,
    idCardOutline
} from 'ionicons/icons';

export function configureIonicons(): void {
    addIcons({
        'sim-outline': idCardOutline,
        'person-outline': personOutline,
        'calendar-outline': calendarOutline,
        'people-outline': peopleOutline,
        'chevron-down-outline': chevronDownOutline,
        'call-outline': callOutline,
        'mail-outline': mailOutline,
        'location-outline': locationOutline,
        'business-outline': businessOutline,
        'map-outline': mapOutline,
        'mail-unread-outline': mailUnreadOutline,
        'home-outline': homeOutline,
        'card-outline': cardOutline,
        'finger-print-outline': fingerPrintOutline,
        'medical-outline': medicalOutline,
        'checkmark-circle-outline': checkmarkCircleOutline,
        'sync-outline': syncOutline,
        'refresh-outline': refreshOutline
    });
}