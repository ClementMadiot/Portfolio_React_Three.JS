# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Library used
- [TailwindCSS](https://tailwindcss.com/docs/installation)

- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
The react-router-dom package contains bindings for using React Router in web applications. Please see the Getting Started guide for more information on how to get started with React Router.
  
- [React-Three-Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
React-three-fiber is a React renderer for three.js. Build your scene declaratively with re-usable, self-contained components that react to state, are readily interactive and can participate in React's ecosystem.

- [react-three/drei](https://www.npmjs.com/package/@react-three/drei/v/9.0.1)
A growing collection of useful helpers and fully functional, ready-made abstractions for @react-three/fiber.

- [react-tilt](https://www.npmjs.com/package/react-tilt?activeTab=readme)
A tiny request Animation Frame powered 60 fps light weight parallax hover tilt effect for ReactJS.

- [react-vertical-timeline-component](https://www.npmjs.com/package/react-vertical-timeline-component)
Create visually appealing and interactive vertical timelines for your web applications. It provides pre-built components for representing timeline elements, including dates, icons, content areas, and connectors.

- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
The react-router-dom package contains bindings for using React Router in web applications. Please see the Getting Started guide for more information on how to get started with React Router.

- [maath](https://www.npmjs.com/package/maath)

- [framer-motion](https://www.npmjs.com/package/framer-motion)
Framer Motion is an open source, production-ready library that’s designed for all creative developers.

- [@emailjs/browser](https://www.emailjs.com/docs/sdk/installation/)
send emails, html and attachments (files, streams and strings) from node.js to any smtp server


# Portfolio_React_Three.JS

Suspense : show an fallback to the loading page

OrbitControls : allowed the user to move the object with his mouse

useGLTF : add to a variable to display the 3D object

Preload : add a content to show the landing progression



Float : <Float speed={3} rotationIntensity={0.6} floatIntensity={2}>

This tag is likely from the @react-three/drei library and represents a component called Float.
It's responsible for creating a basic floating animation for the child elements within it.
The props (speed, rotationIntensity, and floatIntensity) might control the internal behavior of the floating animation

ambientLight : <ambientLight intensity={0.45} />

This tag creates an ambient light source within your scene.
The intensity prop (set to 0.45) controls the overall brightness of the ambient light.
Ambient light doesn't originate from a specific direction, but rather fills the entire scene with a soft, even illumination.

directionalLight : <directionalLight position={[0, 0, 0.07]} />

This tag creates a directional light source within your scene.
The position prop (set to [0, 0, 0.07]) specifies the direction from which the light originates. In this case, it's slightly above the scene (positive Z-axis).
Directional light simulates light coming from a specific direction, such as sunlight or a spotlight.

mesh : <mesh castShadow receiveShadow scale={2.6} >

This tag creates a 3D mesh object, the core element for your "ball."
The castShadow prop enables this mesh to cast shadows on other objects in the scene.
The receiveShadow prop allows this mesh to be affected by shadows cast from other light sources.
The scale prop (set to 2.6) scales the size of the mesh, making it 2.6 times larger in all dimensions.

<mesh // Ball mesh reference position={position} rotation={rotation} />

This tag creates another mesh object, but it's commented out (// Ball mesh reference).
It likely serves as a placeholder for a potential second mesh representing the "ball" with its own position and rotation state.
The commented props (position and rotation) suggest these values might be dynamically controlled elsewhere in your code, potentially enabling movement for this mesh (if it's eventually uncommented).

icosahedronGeometry : <icosahedronGeometry args={[1, 1]} />

This tag defines the geometry of the mesh, creating an icosahedron shape.
An icosahedron is a 20-sided polyhedron with equilateral triangular faces.
The args prop (set to [1, 1]) controls the detail level of the geometry. In this case, it creates a relatively smooth icosahedron.

meshStandardMaterial : <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />

This tag defines the material properties for the mesh, determining its appearance.
meshStandardMaterial simulates a physically based material with lighting effects.
The color prop (set to "#fff8eb") sets the base color of the mesh to a light beige.
The polygonOffset and polygonOffsetFactor props are likely used for minor rendering adjustments to prevent visual artifacts.
The flatShading prop creates a flat shading effect, removing smooth shading transitions on the mesh surface.

Decal : <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />

Config the import img on the 3D object, the position

This tag (likely from @react-three/drei) creates a decal texture on the mesh, potentially adding details or patterns.
The position prop (set to [0, 0, 1]) specifies the location of the decal on the mesh surface. In this case, it's positioned slightly behind the front face.
The rotation prop (set to [2 * Math.PI, 0, 6.25]) might control the rotation of the decal on the mesh.
The scale prop (set to 1) controls the size of the decal relative to the mesh.
The map prop (set to decal) likely refers to a texture object (not shown in the code) containing the image data for the decal.
The flatShading prop again applies flat shading to the decal, removing smooth shading transitions.

useTexture: const [decal] = useTexture([props.imgUrl]);

Allow to add img on the 3D object