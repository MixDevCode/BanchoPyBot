import { DMChannel, MessageEmbed, TextChannel } from "discord.js";
import { ButtonOption } from "./types/ButtonOption";
declare class Pagination {
    private readonly footerText;
    private readonly timeout?;
    private readonly options?;
    private message?;
    private readonly channel;
    private readonly pages;
    private index;
    /**
     *
     * @param {TextChannel | DMChannel} channel - The target channel
     * @param {MessageEmbed[]} pages - Embed pages
     * @param {string} [footerText] - Optional footer text, will show `Text 1 of 5` if you pass `Text`, for example
     * @param {number} timeout - How long button need to be active
     * @param {ButtonOption[]} options - optional options for the buttons
     */
    constructor(channel: TextChannel | DMChannel, pages: MessageEmbed[], footerText?: string, timeout?: number | undefined, options?: ButtonOption[] | undefined);
    /**
     * Starts the pagination
     */
    paginate(): Promise<void>;
}
export { ButtonOption, Pagination };
//# sourceMappingURL=index.d.ts.map