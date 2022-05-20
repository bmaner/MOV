import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export default function useUser() {
  const fetcher = (url) => fetch(url).then((response) => response.json())
  const { data, error } = useSWR('/api/users/me', fetcher)

  const router = useRouter()

  useEffect(() => {
    if (data && !data.ok) {
      // router.replace('/enter')
      return
    }
  }, [data, router])
  //   const [user, setUser] = useState();
  //   useEffect(() => {
  // fetch("/api/users/me")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (!data.ok) {
  //   return router.replace("/enter");
  // }
  // setUser(data.profile);
  //   });
  //   }, [router]);
  //   return user;
  return { user: data?.profile, isLoading: !data && !error }
}
