import { Link } from "@inertiajs/react";


const Pagination = ({links})=>{

    // preserveScroll so it upload nicer not to go on top of the page whrn we naviate between pages
    let locale = localStorage.getItem('locale') || 'sr';
    let translate = {
        '&laquo; Previous' :'Predhodno',
        "Next &raquo;":'Sledeće'
    }
    return (
    <nav className="text-center mt-4"
    >
        {links.map((link)=>(
                <Link 
                preserveScroll
                href={link.url || ""}
                key={link.label}
                className={
                "inline-block py-2 px-3 rounded-lg text-gray-700 text-xs "
                + (link.active ? 'bg-gray-800 text-white ' : " ")
                + (!link.url ? "!text-gray-500 cursor-not-allowed " : "hover:bg:gray-950")
                } 
                
                dangerouslySetInnerHTML={
                    locale == 'sr' ? 
                    link.label == '&laquo; Previous' || link.label == "Next &raquo;" ?
                    {__html: translate[link.label]}
                    :
                    {__html: link.label}
                    :
                    {__html: link.label}

                }>
            </Link>
        )
            
        )}
    </nav>
    )
}

export default Pagination;