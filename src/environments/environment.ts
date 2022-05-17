// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl:'https://weatherapi-com.p.rapidapi.com/current.json',
  XRapidAPIHostHeaderName:'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue:'weatherapi-com.p.rapidapi.com',
  XRapidAPIKeyHeaderName:'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue:'ceb937ebd0msh0fe7ce095905322p1fa576jsn2a8781e5ce82'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
