## How to Set up Environment with Three.JS and Angular and Bootstrap

1. Setup your Angular Project

- Install Angular

    npm install -g @angular/cli@latest

*Make sure you are in the correct folder*
cd documents/github/[myprojectfolder]/Angular/[specificprojectname]

- Make a new project folder

    ng new [my-first-app] --no-strict

Choose "CSS"

- Install Bootstrap

    npm install --save bootstrap@5

- Add Bootstrap to the angular.JSON file

node_modules/bootstrap/dist/css/bootstrap.min

- Test your webpage

    ng serve

# Quickstart for a New server

*Note: If it says "This command is not available when running the Angular CLI outside a workspace, you might not be in the correct project folder*
*It's the one you JUST generated "my-first-app"*

    ng generate component [name of your component]

OR

    ng g c [name of your component]

2. Install Three.js
    npm install three

3. In your component remember to import ThreeJS
    import * as THREE from 'three';

4. Set Up Your Three.js Scene
In your Three.js component, create a basic Three.js scene, renderer, and camera.

5. Integrate Three.js into Angular Component:
Use the ngOnInit lifecycle hook in your Three.js component to initialize the Three.js scene.

6. Embed the Three.js Component in Your Angular Template:
Use the selector of your Three.js component in your Angular template where you want to display the Three.js scene.

7. Handle Responsive Design with Bootstrap:
Utilize Bootstrap's grid system and responsive utility classes to ensure your Three.js scene adapts well to different screen sizes.

8. Test Your Angular App:
Run your Angular app using 
    ng serve.

9. Install Vercel CLI
    npm install -g vercel

10. Build your Angular app
    ng build

11. Configure Vercel
    vercel

12. Deploy to Vercel
    vercel --prod