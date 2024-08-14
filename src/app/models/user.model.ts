interface User {
  userId: number;
  firstName: string;
  lastName: string;
  designationName: string;
  // profilePicture: Blob | string;
  profilePicture: string;
  //   faceEncoding: Uint8Array | null;
}

export default User;
