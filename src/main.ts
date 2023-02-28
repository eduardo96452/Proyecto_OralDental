import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpHaV1KQmFJfFBmQ2lZeVRxc0UmHVdTRHRcQl9hT39bdkNgUHpceXE=;Mgo+DSMBPh8sVXJ0S0J+XE9AflRBQmFBYVF2R2BJeVRwcl9HZ0wxOX1dQl9gSXxRcERrWXldeXFRRGU=;ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxLdkx0RWFab1h6dFNMYVtBJAtUQF1hSn5RdENiUX9Yc31QQ2VZ;MTIwOTI5N0AzMjMwMmUzNDJlMzBDU0NyQlZTQkpuTEV5WkEyR21HVHk0d1ZzNWtNc2ZaYU53QmpTV3VxU2FRPQ==;MTIwOTI5OEAzMjMwMmUzNDJlMzBIWU9qYURDNXlKQ0NWWWVVSERjMTNmeFhTMTBqU09HZmxYZ2hMYnNIMm13PQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmBWfFtpR2NbfE52flVAal1WVBYiSV9jS31TdEdlWHdedndcQGBaWA==;MTIwOTMwMEAzMjMwMmUzNDJlMzBnY2NObVZpeUNJdUxCSExsWE1XTm96d21WSW1uNlI1NnJWV2k2dzdYclVvPQ==;MTIwOTMwMUAzMjMwMmUzNDJlMzBpYys2cFArZ21udk56RzErQ0ROSHdHQnFnSE1ldStlemtWa1oxUW1lOUxjPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXnxLdkx0RWFab1h6dFNMYVtBJAtUQF1hSn5RdENiUX9Yc31TQ2VV;MTIwOTMwM0AzMjMwMmUzNDJlMzBlRzVjSjZubzVtcFZZbjh0SUFJYkpsY0ZBc0cwK2F2b3hrckpRWERiSEZ3PQ==;MTIwOTMwNEAzMjMwMmUzNDJlMzBUMzNDd2lTNkQvekpPMTh3L2c3bVhtdWIxMmpDTWphdnZMMDlCdEg2c3ZZPQ==;MTIwOTMwNUAzMjMwMmUzNDJlMzBnY2NObVZpeUNJdUxCSExsWE1XTm96d21WSW1uNlI1NnJWV2k2dzdYclVvPQ==');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
