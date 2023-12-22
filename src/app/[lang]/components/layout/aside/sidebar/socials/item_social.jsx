import Link from "next/link";

export const ItemSocial = ({data}) => {
    return(
        <Link href={data.href} prefetch={false} className="flex items-center gap-[14px] item-social">
            {data.children}
        </Link>
    )
}