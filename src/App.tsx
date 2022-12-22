import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere, Sparkles } from "@react-three/drei";
import Jiraichan from "./components/Jiraichan";
import World from "./components/World";
import JiraichanFbx from "./components/JiraichanFbx";

const App = () => (
	<Canvas camera={{ fov: 45, position: [-4, 2, -4] }} className='canvas'>
		<Sparkles position={[1, 1, 1]} />
		<OrbitControls makeDefault />
		<mesh position={[6.948, -2.158, 0.465]}>
			<boxBufferGeometry attach="geometry" />
			<meshStandardMaterial
				attach="material"
				color={"rgb(254, 0, 255)"}
				wireframe={false}
			/>
		</mesh>
		<directionalLight position={[4.224, 1.912, 3.046]} castShadow={true} />
		<ambientLight intensity={1} />
		<Sphere
			position={[8.817, 1.557, 5.818]}
			material-reflectivity={0.8}
			material-opacity={1}
			material-transparent={false}
		/>
		<Jiraichan />
		<JiraichanFbx />
	</Canvas>
);

export default App;
