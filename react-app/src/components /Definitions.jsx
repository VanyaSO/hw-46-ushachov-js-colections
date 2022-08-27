import React from 'react';

export default function Definitions(props) {
    return (
        <dl>
            {props.data.map((item) =>
                <>
                    <dt key={item.id}>{item.dt}</dt>
                    <dd key={item.id}>{item.dd}</dd>
                </>
            )}
        </dl>
    );
}



