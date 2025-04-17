import { Extension } from "@tiptap/react";
import "@tiptap/extension-text-style";
import { Command, CommandProps } from '@tiptap/core';

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        fontSize: {
            setFontSize: (attrs: { size: string }) => ReturnType
            unsetFontSize: () => ReturnType
        }
    }
}

export const FontSizeExtension = Extension.create({
    name: "fontSize",
    addOptions() {
        return {
            types: ["textStyle"],
        }
    },
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: null,
                        parseHTML: element => element.style.fontSize,
                        renderHTML: attributes => {
                            if (!attributes.fontSize) {
                                return {}
                            }

                            return {
                                style: `font-size: ${attributes.fontSize}`,
                            }
                        }
                    }
                }
            }
        ]
    },
    addCommands() {
        return {
            setFontSize:
                (attrs: { size: string }): Command =>
                    ({ chain }: CommandProps) => {
                        return chain().setMark("textStyle", { fontSize: attrs.size }).run();
                    },

            unsetFontSize:
                (): Command =>
                    ({ chain }: CommandProps) => {
                        return chain().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run();
                    },
        };
    }
})