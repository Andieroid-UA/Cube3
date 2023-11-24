## 11/16/23

https://codepen.io/b007/pen/oNgNxzz

I used inspiration from this one. But it wasn't working. Made a test plain html website to test first. Now trying to fight with Angular to have it run through that.

Also changing background to black because my eyes hurt.

![Alt text](image.png)

It now works, but with these dimentions it really should be wrapping around like an equirectangular panorama!

https://threejs.org/docs/#api/en/geometries/SphereGeometry

✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨

![Alt text](image-1.png)

✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨

## 11/17/23

Oh sweet. The church test worked!! Now I have a template to work off of. Welp, time to build that website base now that I have two examples.

## 11/18/23

Okie dokie. Going to replace some elements to get a splash page...

## 11/19/23

Going to continue to swap things out. Want this in 4H green with some movable cube placeholders for the time being...
https://getbootstrap.com/docs/5.3/examples/carousel/

*Okay, I'm going to create another branch so I can get these buttons working*

Going off of this tutorial so I know how the button actions are integrated into the carousel...

https://www.youtube.com/watch?v=ku_97a6Bgkg

# 11/20/23

AHAAA!!!!

![Alt text](image-2.png)

The issue was the SCRIPTS in the "angular.json" didn't have the bootstrap script. It works now EEEE!! :D

*going to change this to a template. Then work off that template*

I just needed to add this to the app component, and modify the routing, and make a brand new component specifically for the splash page

<router-outlet></router-outlet>

I would like to get started with the layout of that demo page now...

## 11/21/23

Today i'm going to get started with the template of that page!

- Make a component for the demo, need to flush out so it's a "template" to be reused by the project as a whole for "other" modules and classes

WHOOHOO! In trying to organize those cubes on the demo page, I finally found a way to expand the main splash page. Weird how it solves itself like that...

*Note to self, after the layout you want to start to get these things ready*

- login page and fake login icon in the header
- make a firebase thing for the login
- You need to do a test run of that cat app in it's own project, then migrate it over here. Just like you did with that cube. THIS is what's going to make this non-crud since you can  download and upload models. This is the BREAD AND BUTTER of the demo!

## 11/22/23

Okay, I was able to move things around to get this kind of 

![Alt text](image-3.png)

![Alt text](image-4.png)

I am trying to get something like this below. Will most likely need to make a few more components but this will help emphasize the capability to not only reuse this for the rest of the modules, but to use it across courses as well and essentially make the beginnings of an LMS site.

![Alt text](image-5.png)