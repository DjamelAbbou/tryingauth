// import { getUsers } from "@/api/users";
// import { jsonify } from "@/modules/db";

import Container from '@/ui/container'
import { useRouter } from 'next/router'

export default function HomePage({ users = [] }) {
  const router = useRouter()
  return (
    <Container className='mt-16 text-white text-2xl flex flex-col gap-8'>
      <div
        className='cursor-pointer border-white'
        onClick={() => router.push('/auth/Signup')}
      >
        sign up
      </div>
    </Container>
  )
}

// export async function getServerSideProps({ ctx }) {
//   const users = await getUsers();

//   return {
//     props: {
//       users: jsonify(users),
//     },
//   };
// }
// export function withValidations(Component) {
//   return function wrappedComponent({}) {
//     const [errors, setErrors] = useState([]);
//     return (
//       <>
//         <Component />
//         {errors.length > 0 && <div>{errors.join(", ")}</div>}
//       </>
//     );
//   };
// }
