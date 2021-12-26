import * as THREE from 'three';

const Cube = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, 75 / 75, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( 75, 75 );
    console.log(renderer);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
    };

    //animate();

    return (
        <>
            test123
        </>
    );
}

export default Cube;

