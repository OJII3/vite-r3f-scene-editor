import { FC } from "react";
import { useLoader } from "react-three-fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const World: FC = () => {
	const fbx = useLoader(FBXLoader, "/world.fbx");
	return <primitive object={fbx} />;
};

export default World;
