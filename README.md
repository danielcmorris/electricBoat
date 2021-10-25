# ElectricBoat

This project was developed to assist people to do some performance modeling with their boats

## Origin

The system primary origin is from and excel sheet called, "PERFORMANCE MODELING SPREADSHEET FOR ELECTRIC PROPULSION SYSTEMS IN DISPLACEMENT MONOHULL BOATS"

initially found here: [Thunderstruck EV](http://www.thunderstruck-ev.com/Manuals/EBOAT%20MODEL%20SPREADSHEET.xls)

## Goal

I'd like to simply make some of these formulas a bit more user friendly and perhaps support the community a bit.  I'll be adding in some references to my own boat and the vendors who have provided me with support over the transition from diesel to electric.
 
## Build Information

I host in a subdirectory of my website here:  http://morrisdev.com/eboat.  To build this, I changed the angular.json file to include "baseHref": "./eboat/", in the productoin configuration after file-replacements happen.
the htaccess file looks like this:

RewriteEngine On
RewriteBase /myapp/
Options +FollowSymLinks

RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.html [L,QSA]

I included it in the build on angular.json as well.