import { FC, Fragment, } from "react";

type GenericTablePropsType<T extends Record<string, unknown>> = {
    rows: ReadonlyArray<T>;
    RowComponent: FC<T>;
};

function GenericTable<T extends Record<string, unknown>,>({ rows, RowComponent }: GenericTablePropsType<T>) {

    return (
        <Fragment>
            {rows.map(row => <RowComponent {...row} />)}
        </Fragment>
    );
}

export const UseTableComponent: FC = () => {

    return (
        <Fragment>
            <GenericTable
                rows={[{ id: "1", name: "Thouhid" }]}
                RowComponent={(props) =>
                    <Fragment>
                        <small>{props.id}</small>
                        <small>{props.name}</small>
                    </Fragment>
                }
            />
        </Fragment>
    );
};