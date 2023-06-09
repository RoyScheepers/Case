<?php

/**
 * @link https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license https://craftcms.github.io/license/
 */

namespace craft\markdown;

use cebe\markdown\GithubMarkdown as BaseGithubMarkdown;

/**
 * Markdown parser
 *
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since 4.4.2
 */
class GithubMarkdown extends BaseGithubMarkdown
{
    use SafeLinkTrait;
}
