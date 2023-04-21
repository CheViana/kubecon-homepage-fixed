# KubeCon CloudNativeCon Europe 2023 homepage made usable

Especially for virtual attendees on laptop or workstation.

The page in question: https://kubecon-cloudnativecon-europe.com/home-full/ 



Homepage before:

![Homepage before](imgs/homepage-before.png)



Homepage after:

![Homepage afterwards, schedule has a full screen to itself](imgs/homepage-after.png)





## What I am unhappy about in the initial homepage 

- tini-tiny table with talks list
- lots of useless elements that occupy screen space
- scroll-in-a-scroll
- there isn't even a separate page with *only* schedule

Sched is not cutting it for me - there's no video of the talk in there, not even a link to videostream.
I just need a long list of talk videos...





## How to add JS to make homepage pretty

### Option 1, with autoloading of the script that adjusts KubeCon homepage. Using Tampermonkey or similar Chrome plugin.

Chrome, 112.0 version

1. Install [Tampermonkey plugin](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) into Chrome
2. pin Tampermonkey plugin in browser header

![Pin plugin](imgs/pin-plugin.png)

3. Click Tampermonkey plugin icon in browser header, select "Create a new script..."

![Create new user script](imgs/create-new-script.png)

4. add [fix-homepage.js](fix-homepage.js) file contents to the script body. Can examine the JS - nothing fancy in there, find element-set style.

![Add user script content](imgs/add-user-script.png)

5. Select tab "Settings" right above script edit area. Section "Includes/Excludes", "User matches" box, click "Add..." button - put https://kubecon-cloudnativecon-europe.com/home-full/ in the pop-up window

![Update user script settings](imgs/add-user-script-settings.png)

6. !! Click "Save" !!

![Save user script](imgs/tamper-monkey-save.png)

7. Reload KubeCon homepage

8. It should autoload the script every time kubecon homepage loads




### Option 2. Use content snippets. No plugins. No autoload.

Chrome browser

1. Load webpage https://kubecon-cloudnativecon-europe.com/home-full/ , right click on page content, click "Inspect"
2. In developer tools panel, select "Sources" tab, in that select "Snippets" tab
3. Click "+ New snippet"

![New snippet](imgs/new-snippet.png)

4. Put contents of [fix-homepage.js](fix-homepage.js) file into the snippet body window. Save snippet (Ctrl+S).

5. Run snippet - click on run button

![Play snippet](imgs/play-snippet.png)

6. You don't have to create snippet each time, but you have to run it each time






## Manual (artistic) process of fixing the homepage

1. Delete the buttons on the right to the schedule. Who needs these buttons here?! They are also in left-side menu and that's where I would look for them

![Delete right column of the homepage grid](imgs/img1.png)


2. Make left column full-width

![Make left column full-width](imgs/img2.png)

3. Remove the useless "Community in Bloom" header

![Remove the useless "Community in Bloom" header](imgs/img3.png)

4. Remove equally useless "Hello, Jane" header (seriously? You just put "Hello user" there?! Did you make sysadmin write this website for you?)

![Remove the "Hello user" header](imgs/img4.png)

5. Find container with schedule and remove fixed height to get rid of, oh gosh, scroll-in-a-scroll

![Make height of schedule box to be same as content height](imgs/img5.png)


P.S. Are they hiding the schedule at all for mobile devices? LOL
