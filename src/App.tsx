import Test from '@/components/Test';
import { useState } from 'react';
import api from './Api/api';

interface User {
  email: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const getUser = async () => {
    try {
      const response = await api.get<User[]>('/users/get-users');
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <label>
        <div className="text-5xl mx-auto font-bold">tailwind</div>
        <div className="text-3xl font-bold underline">Hello world!</div>
      </label>

      <div className="text-5xl mx-auto font-bold">checkbox - daisyUI</div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input type="checkbox" checked className="checkbox" readOnly />
        </label>
      </div>

      <h2>button - daisyUI</h2>
      <button className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
      <button className="btn btn-ghost">Button</button>
      <button className="btn btn-link">Button</button>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <Test />

      <button className="btn" onClick={getUser}>
        get API
      </button>
      {users && users.map((user) => <div key={user.email}>{user.email}</div>)}
    </div>
  );
};

export default App;
