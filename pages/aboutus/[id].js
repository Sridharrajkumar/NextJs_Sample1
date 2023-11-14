import { useRouter } from 'next/router'
import Link from 'next/link';

const Developer = () => {

  const router = useRouter();

  const developer = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
  ]

  const userid = router.query.id;
  
  const selectedUser = developer.find(dev => dev.id === Number(userid));
    return (
      <div>
        <h1>{selectedUser ? selectedUser.name : "Developer doesn't exist"}</h1>
        {selectedUser && <p>Role: {selectedUser.role}</p>}
        <Link href="/aboutus">
          <a style={{ color: 'red' }}>&lt; Back to Developer List</a>
      </Link>
      </div>
    );
  };
export default Developer;
  
