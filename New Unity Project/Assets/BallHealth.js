
import UnityEngine.SceneManagement;
#pragma strict


var maxFallDistance = -10;

function Update () {

if(transform.position.y <= maxFallDistance){

SceneManager.LoadScene("save01");
}

}