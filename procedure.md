# Development Procedure

## Step 1 - Inizializing Project
- Run ```ionic start mcu-viewing-order tabs```
    - A new Project will be created.
    - All dependencies will be installed

- Enter Project Directory
- Run ```ionic serve --host 0.0.0.0 --ssl```
    - Open the displayed URL on your mobile 

- Create a new Firebase-Project under https://console.firebase.google.com
    - Setup (Web)-Hosting
    - Create new App-Credentials and set in ```environment.(prod).ts``` files

- Add your Colorscheme to the scss-File under ```theme/variables.scss```

- Make your app a PWA using ```ng add @angular/pwa```. Fire this up in your CLI.

## Step 2 - Implementing Internationalization
- Create various language files as JSON in ```assets/i18n/...```
- Add some text to it. Hint: Translate using deepl.com
- Create a new Language-Service ```ionic generate service services/language```
- Add a simple array with your languages
- Create a method which will be called anytime you open the app
    - The method has to get your current browser language
    - Determine the language using the browser language and the array. Try with ```.includes(...)```.

## Step 3 - Language button
- Associate a flag to each language
- Add ActionSheet representation
    - On Click of Item, show Action-Sheet, when language get selected, refresh app-language and reset icon.

## Step 4 - Functions for extras
- Add Links to Disney+ and the Instagram profile of Marvel
    - On Click of Item, open the url
- Create new function: Delete progress
    - Automatic reload

## Step 5 - 
- Worked in tab1.page.html 
- Start making the main-page
    - Set title with ```<ion-header>``` and ```<ion-toolbar>```
    - go through all the information: ```<ion-item *ngFor="let mediaItem of mediaItems;``` and list all the elements up ``` index as i ;">```
    - add picture to every item from mediaItem.cover_url
    - add informations into the label; title and shortened overview 
    - new function: open detailview when click on the label; ```<ion-label (click)="showDetails(i)">```
    -> screenshot 2; we wait for the system to open a popup with the lattice we created  before (details.page.html) and to put the informations from GitHub into it.
        - working now on other page: details.page.html
            -  generated interface which structures the information (differentiation string and number)
        - worked with an example id:1/2 and put it into the folder tab1.page.ts (Sieb das die passenden Infos sucht)
        > interface checks which information fits into which mediaItem that we generated in the step before
    - designed detailview in detail.page.scss and added new information in details.page.html (structure)
        - director, duration, release and playing date, overview and trailer


## Step 6 - 
- Added the buttons beneath the poster
- set primary color and choose the icons from ionicons
- Decided with if/else sentences which icons should be shown when
    - toastbutton when push on postcreditscene button
    (language?)

## Step 7 - 
- The single episodes are now shown in the detailview and have a checkbox infront
    - look screen 3; Used a YouTube video (https://www.youtube.com/watch?v=sa1BntMr4YA) 
- Downloading data from Github
- Added button with back-to-mainsite function

## Step 8 - 
- Marked Movie / TV Show as watched. ( on main view)
    - Informations will be stored and retrieved from LocalStorage.

- started with new feature: for setting single episodes as watched. When all episodes of one mediaItem are watched > the state is watched gets set on true and it is visible in the main view
- Single series can't be checked anymore in main view since this works now automatically (look step before)

## Step 9 - 
- Implented a search bar
- Shows not just titles consisting out of those letters or words but also those who are having these somewhere in the overview
    - if you remember for example an action but don't now the film anymore you can find it like that
- bug fix
- added comments to almost everything
## Hints
- Why do we not use a Database like MySQL, MariaDB, MongoDB or Firebase Firestore (or Real-Time-Database)?
    - It's simple. Most services are not free or limited. This means, as soon, as the app is online and gets used by multiple users, you will have to pay if you exceed the limits from the database-provider.
    - And: Using a JSON-File or CSV-File which is public available, other developers can build on this data and create other awesome apps. When Using databases, the data is a closed source and only available for our app.
    - #opensourceneverdies 🎉
- didn't add trailers in different languages since there aren't all in german and almost none in french: if you do it, do it right or leave it!