export interface EDIFACTMessage {
    message_header: {
        reference_number: string;
        message_type: string;
        version: string;
        agency: string;
        association_assigned_code: string;
    };
    beginning_of_message: {
        message_name_code: string;
        document_number: string;
        message_function_code: string;
    };
    line_item: {
        line_item_number: string;
        item_identifier: string;
        item_type: string;
    };
    quantity: {
        quantity_qualifier: string;
        quantity: number;
    };
    price_details: {
        price_qualifier: string;
        unit_price: number;
    };
}

export function parseEDIFACT(message: string): EDIFACTMessage {
    const segments = message.split("'").filter((s) => s.trim() !== "");
    const result: any = {};

    segments.forEach((segment) => {
        const parts = segment.split("+");
        const tag = parts[0];

        if (tag === "UNH") {
            const msgTypeParts = parts[2]?.split(":") || [];
            result.message_header = {
                reference_number: parts[1],
                message_type: msgTypeParts[0] || "",
                version: `${msgTypeParts[1] || ""}:${msgTypeParts[2] || ""}`,
                agency: msgTypeParts[3] || "",
                association_assigned_code: msgTypeParts[4] || "",
            };
        } else if (tag === "BGM") {
            result.beginning_of_message = {
                message_name_code: parts[1],
                document_number: parts[2],
                message_function_code: parts[3],
            };
        } else if (tag === "LIN") {
            const itemParts = parts[3]?.split(":") || [];
            result.line_item = {
                line_item_number: parts[1],
                item_identifier: itemParts[0] || "",
                item_type: itemParts[1] || "",
            };
        } else if (tag === "QTY") {
            const qtyParts = parts[1]?.split(":") || [];
            result.quantity = {
                quantity_qualifier: qtyParts[0],
                quantity: parseFloat(qtyParts[1]),
            };
        } else if (tag === "PRI") {
            const priceParts = parts[1]?.split(":") || [];
            result.price_details = {
                price_qualifier: priceParts[0],
                unit_price: parseFloat(priceParts[1]),
            };
        }
    });

    return result as EDIFACTMessage;
}
