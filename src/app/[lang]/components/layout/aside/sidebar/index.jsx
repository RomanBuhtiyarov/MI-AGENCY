"use client";
import { useState, useEffect } from "react";
import { Unbounded } from "next/font/google";
import User from "./_user";
import { OpacityDivider } from "@/app/[lang]/components/UI/Dividers/OpacityDivider";
import { Nav } from "./nav";
import { Lang } from "@/app/[lang]/components/layout/aside/sidebar/lang";
import { Socials } from "@/app/[lang]/components/layout/aside/sidebar/socials";
import axios from "axios";
// import ky from "ky";
// import getCurrentUser from "@/actions/getCurrentUser";

const Unbound = Unbounded({ subsets: ["latin"] });

export default function Sidebar({ lang }) {
  // const user = await getCurrentUser();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined") {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
          return;
        }

        try {
          const response = await axios.get(
            `https://psymi.com.ua/${lang.backend_locale}/api/auth/users/me`,
            {
              headers: {
                Authorization: `Token ${authToken}`,
                "Content-Type": "application/json",
              },
            },
          );
          // Set the user data in the component state
          setUserData(response.data);
        } catch (error) {
          setError("An error occurred while fetching user data");
        }
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once, similar to componentDidMount

  // Render logic based on the fetched user data or error
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <aside className='w-full h-[80px] md:w-[250px] md:h-[610px]'>
      <div className='w-full h-full bg-white shadow-lg rounded-t-[10px] md:rounded-[15px] pr-[0px] py-[15px] md:px-[20px] md:py-[25px] flex flex-row md:flex-col justify-center md:justify-between items-center md:items-start'>
        <div>
          <div>
            <User
              userData={userData}
              // user={user}
              font={Unbound}
              lang={lang}
            />
          </div>
          <div className='hidden md:block pt-[28px] pb-[20px]'>
            <OpacityDivider />
          </div>

          <nav>
            <Nav
              userData={userData}
              // user={user}
              lang={lang}
            />
          </nav>
        </div>
        <div className='hidden md:block'>
          <Lang />
          <Socials />
        </div>
      </div>
    </aside>
  );
}
