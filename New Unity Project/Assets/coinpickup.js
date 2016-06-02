#pragma strict



function OnTriggerEnter (info : Collider) 
{

     if (info.tag =="Player")
    {
          Debug.Log("add coin counter here");
          Destroy(gameObject);
    }

}