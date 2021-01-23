export const schema = {
    "type": "object",
    "properties": {
        "data": {
            "type": "array",
            "minItems": 2,
            "maxItems": 4,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "unique": true,
                        "minimum": 1
                    },
                    "title": {
                        "type": "string"
                    },
                    "category": {
                        "type": "string"
                    },
                    "author": {
                        "type": "string",
                        "faker": "name.lastName"
                    },
                },
                "required": ["id", "title", "category", "author"]
            }
        }
    },
    "required": ["data"]
};