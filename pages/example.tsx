// import React from 'react';
// import { prisma } from "@/lib/prisma";
//
// type Props = {
//     user: any;
// }
//
// const Example = ({ user }: Props) => {
//     return (
//         <div>
//             {user.email}
//         </div>
//     );
// };
//
// export default Example;
//
// export const getServerSideProps = async () => {
//     const user = await prisma.user.findFirst({
//         where: {
//             email: 'test@test.com'
//         }
//     });
//     console.log(user);
//     return {
//         props: {
//             user
//         }
//     };
// };
