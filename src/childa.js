import {UserContext} from "./App13a"
import {UserContext} from 'react';

export default function Childa() {

const {user,setUser} = UserContext(UserContext);
  return (
    <div>
       <h2>Hello {user} from Child component</h2>
      <button>Change to Cathy</button>
    </div>
  )
}
