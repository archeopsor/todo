import { useEffect, useState } from "react";
import { sortAndDeduplicateDiagnostics } from "typescript";
import { StoreState } from "../Redux";
import { getTokens , refreshToken } from "../Requests/Login"
import { Item } from "../Requests/Item";
import { AxiosError } from "axios";

const ItemCard = () => {
    const [items, setItems] = useState<ItemType[]>([]);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        Item.getAllItems()
            .then((data) => {
                console.log(data);
                setItems(data);
            })
            .catch((err: AxiosError) => {
                //TODO all of this
                if (!err.response) {
                    console.log();
                }
                else if (err.response.status === 400){ // User isn't logged in
                    console.log(); // redirect to login?
                }
                else{
                    setIsError(true);
                    console.log(err);
                }
            })

        return () => {}
    }, []);

    return (
        <div>
            <p></p>
        </div>
    )

}

export default ItemCard;