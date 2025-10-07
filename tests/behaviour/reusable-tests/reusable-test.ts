import { reusableTest } from "src";
import { NEW_NAME } from "./constants";

type ReusableState = {
    name: string;
};

export const ChangeNameTest = reusableTest<ReusableState>(({ test }) => {
    test.case("Change name", ({ state }) => {
        state.name = NEW_NAME;
    });
});
