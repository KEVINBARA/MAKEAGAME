#pragma strict


var rotationSpeed = 100 ;
var jumpHeight = 8 ;

private var isFalling = false ; // do not appear in Unity


function Update () {

//Handle Ball Rotation
var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed ;

rotation *= Time.deltaTime ;

GetComponent.<Rigidbody>().AddRelativeTorque(Vector3.back * rotation) ;


if (Input.GetKeyDown(KeyCode.W) && isFalling == false)
{

GetComponent.<Rigidbody>().velocity.y =jumpHeight;

}
isFalling = true ;
}

function OnCollisionStay (){

  isFalling = false;

}