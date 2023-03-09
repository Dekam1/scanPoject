import beginner from "./img/beginner.png"
import pro from "./img/pro.png"
import business from "./img/business.png"

const rates = [
    {
        active: true,
        id: 1,
        name: "Beginner",
        headerDescription: "Для небольшого исследования",
        price: {
            installmentPlan: "150",
            discountPrice: "799",
            priceWithoutDiscount: "1 200"
        },
        description: [
            "Безлимитная история запросов",
            "Безопасная сделка",
            "Поддержка 24/7"
        ],
        styles: {
            background: "#FFB64F",
            color: "#000000"
        },
        img: beginner
    },
    {
        active: false,
        id: 2,
        name: "Pro",
        headerDescription: "Для HR и фрилансеров",
        price: {
            installmentPlan: "279",
            discountPrice: "1 299",
            priceWithoutDiscount: "2 600"
        },
        description: [
            "Все пункты тарифа Beginner",
            "Экспорт истории",
            "Рекомендации по приоритетам"
        ],
        styles: {
            background: "#7CE3E1",
            color: "#000000"
        },
        img: pro
    },
    {
        active: false,
        id: 3,
        name: "Business",
        headerDescription: "Для корпоративных клиентов",
        price: {
            installmentPlan: null,
            discountPrice: "2 379",
            priceWithoutDiscount: "3 700"
        },
        description: [
            "Все пункты тарифа Pro",
            "Безлимитное количество запросов",
            "Приоритетная поддержка"
        ],
        styles: {
            background: "#000000",
            color: "#FFFFFF"
        },
        img: business
    }
]

export default rates