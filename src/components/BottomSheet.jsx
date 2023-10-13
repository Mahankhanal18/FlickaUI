import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheet = ({ children, refRBSheet, height }) => {
    return (
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            height={height}
            customStyles={{
                wrapper: {
                    backgroundColor: "transparent"
                },
                draggableIcon: {
                    backgroundColor: "#000"
                }
            }}
        >
            { children }
        </RBSheet>
    );
}

export default BottomSheet;