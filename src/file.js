import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Container } from "./file.styled"

const starComments = [
    {
        value: 1,
        comment: "Horrible",
    },
    {
        value: 2,
        comment: "Bad",
    },
    {
        value: 3,
        comment: "Average",
    },
    {
        value: 4,
        comment: "Good",
    },
    {
        value: 5,
        comment: "Excellent",
    }
]

const StarRating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [ratingComment, setRatingComment] = useState("")

    return (
        <Container>
            {starComments && starComments.map((star, i) => {
                const ratingValue = star.value + 1
                return <label>
                    <FaStar
                        onClick={() => (setRating(ratingValue), setRatingComment(star.comment))}
                        className="star"
                        size={20}
                        color={ratingValue <= (hover || rating) ? "yellow" : "grey"}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}>
                    </FaStar>
                </label>
            })}
            <p> {ratingComment}</p>
        </Container>
    )
}
export default StarRating