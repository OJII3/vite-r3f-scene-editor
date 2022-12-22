import { FC } from "react";
import { useLoader } from "react-three-fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const JiraichanFbx: FC = () => {
	const fbx = useLoader(FBXLoader, "/Jiraichan.fbx");
	return <primitive object={fbx} />;
};

export default JiraichanFbx;
