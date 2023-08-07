import { TotalGNB } from "../GNB/TotalGNB"
import { SignOut } from "../auth/SignOut"

export const Header = () => {
    return(
        <div className="flex justify-between mt-10">
        <TotalGNB /> <SignOut/>
      </div>
    )
}