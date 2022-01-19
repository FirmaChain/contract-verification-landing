import { Fragment, ReactNode, useEffect, useMemo, useState } from "react";
import { Stack } from "@mui/material";
import Indicator from "../indicator";

interface ICarouselProps {
    length: number;
    cardSize: number;
    gap: number;
    style: React.CSSProperties;
    children: ReactNode;
}

const Carousel = ({ length, cardSize, gap, style, children }: ICarouselProps) => {
    const CarouselWidth = useMemo(() => {
        const cardWidth = cardSize;
        const paddingSize = gap;

        return cardWidth * length + paddingSize * (length - 1);
    }, [length, cardSize, gap]);

    const [idx, setIdx] = useState(0);

    const [startOffset, setStartOffest] = useState(null);
    const [mouseDownClientX, setMouseDownClientX] = useState(0);
    const [mouseDownClientY, setMouseDownClientY] = useState(0);
    const [mouseUpClientX, setMouseUpClientX] = useState(0);
    const [mouseUpClientY, setMouseUpClientY] = useState(0);

    const handleMouseDown = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setMouseDownClientX(event.clientX);
        setMouseDownClientY(event.clientY);
    };

    const handleMouseUp = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setMouseUpClientX(event.clientX);
        setMouseUpClientY(event.clientY);
    };

    useEffect(() => {
        const dragSpaceX = Math.abs(mouseDownClientX - mouseUpClientX);
        const dragSpaceY = Math.abs(mouseDownClientY - mouseUpClientY);
        const vector = dragSpaceX / dragSpaceY;

        if (mouseDownClientX !== 0 && dragSpaceX > 100 && vector > 2) {
            if (mouseUpClientX < mouseDownClientX && idx < length - 1) {
                setIdx(idx + 1);
            } else if (mouseUpClientX > mouseDownClientX && idx > 0) {
                setIdx(idx - 1);
            }
        }

        return () => {
            setMouseDownClientX(0);
            setMouseDownClientY(0);
        };
    }, [mouseUpClientX, idx]);

    const handleDragStart = (event: any) => {
        if (event.type === "touchstart") {
            setStartOffest(event.changedTouches[0].screenX);
        } else {
            setStartOffest(event.pageX);
        }
    };

    const handleDragEnd = (event: any) => {
        let endOffset;
        if (event.type === "touchend" || event.type === "mouseup") {
            endOffset = event.changedTouches[0].screenX;
        } else {
            endOffset = event.pageX;
        }

        const result = (startOffset && startOffset - endOffset) || 0;

        if (result < -50 && idx > 0) {
            setIdx(idx - 1);
        } else if (result > 50 && idx < length - 1) {
            setIdx(idx + 1);
        }
    };

    return (
        <Fragment>
            <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onTouchStart={handleDragStart} onTouchEnd={handleDragEnd} style={{ ...style }}>
                <Stack
                    className="horizentalScroll"
                    direction="row"
                    sx={{
                        width: CarouselWidth,
                        overflow: "hidden",
                        gap: `${gap}px`,
                        transform: `translateX(${gap - cardSize * idx - gap * idx}px)`,
                    }}
                >
                    {children}
                </Stack>
            </div>
            <Indicator length={length} nowIdx={idx} setIdx={setIdx} />
        </Fragment>
    );
};

export default Carousel;
