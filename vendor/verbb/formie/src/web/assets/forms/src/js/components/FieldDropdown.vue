<template>
    <div class="fui-field-actions">
        <button class="fui-field-settings fui-tab-btn menubtn" role="button" type="button" :data-menu-anchor="$idRef('edit-field-anchor')">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <path d="M29.328 13.732l-3.551-0.35c-0.251-0.927-0.597-1.739-1.038-2.488l2.294-2.716c0.104-0.127 0.167-0.292 0.167-0.471 0-0.206-0.084-0.393-0.219-0.528l-2.161-2.161c-0.135-0.135-0.322-0.219-0.528-0.219-0.179 0-0.344 0.063-0.472 0.168l-2.761 2.267c-0.702-0.415-1.513-0.761-2.37-0.996l-0.42-3.568c-0.039-0.379-0.356-0.671-0.742-0.672h-3.052c-0.386 0.001-0.703 0.293-0.742 0.669l-0.35 3.559c-0.927 0.251-1.739 0.597-2.487 1.038l-2.716-2.293c-0.127-0.104-0.292-0.167-0.471-0.167-0.206 0-0.393 0.083-0.528 0.219l-2.156 2.156c-0.135 0.135-0.219 0.322-0.219 0.528 0 0.179 0.063 0.344 0.168 0.472l2.267 2.761c-0.415 0.702-0.762 1.513-0.996 2.371l-3.572 0.42c-0.379 0.039-0.671 0.356-0.672 0.742v3.052c0.001 0.386 0.293 0.703 0.669 0.742l3.559 0.35c0.251 0.927 0.597 1.739 1.038 2.487l-2.293 2.716c-0.106 0.128-0.171 0.293-0.171 0.474 0 0.205 0.083 0.391 0.218 0.525l2.156 2.156c0.135 0.135 0.322 0.219 0.528 0.219 0.179 0 0.344-0.063 0.472-0.168l2.761-2.267c0.702 0.416 1.513 0.764 2.37 1.001l0.421 3.568c0.039 0.379 0.357 0.672 0.743 0.672 0.001 0 0.003 0 0.004 0h3.052c0.386-0 0.703-0.293 0.742-0.669l0.35-3.555c0.927-0.253 1.739-0.6 2.487-1.043l2.716 2.293c0.127 0.104 0.292 0.167 0.471 0.167 0.206 0 0.393-0.084 0.528-0.219l2.156-2.156c0.134-0.134 0.218-0.32 0.218-0.525 0-0.181-0.065-0.346-0.172-0.475l-2.267-2.761c0.415-0.702 0.761-1.513 0.996-2.37l3.568-0.42c0.383-0.035 0.68-0.353 0.681-0.742v-3.052c-0-0.386-0.293-0.703-0.669-0.742l-0.003-0zM16 20.13c-2.281 0-4.13-1.849-4.13-4.13s1.849-4.13 4.13-4.13c2.281 0 4.13 1.849 4.13 4.13s-1.849 4.13-4.13 4.13z" />
            </svg>

            <span class="sr-only">Field options</span>
            <div :id="$id('edit-field-anchor')"></div>
        </button>

        <div class="fui-menu menu" data-align="right">
            <ul class="padded">
                <field-dropdown-item icon="edit" action="edit" label="Edit" @clicked="selectOption" />

                <field-dropdown-item v-if="!isRequired && canRequire" icon="asterisk" action="require" label="Make required" @clicked="selectOption" />
                <field-dropdown-item v-else-if="canRequire" icon="asterisk" action="unrequire" label="Make not required" @clicked="selectOption" />

                <field-dropdown-item icon="clone" action="clone" label="Clone" @clicked="selectOption" />

                <li>
                    <hr class="padded">
                </li>

                <field-dropdown-item icon="remove" action="delete" label="Delete" classes="error" @clicked="selectOption" />
            </ul>
        </div>
    </div>
</template>

<script>
import FieldDropdownItem from '@components/FieldDropdownItem.vue';

export default {
    name: 'FieldEditTab',

    components: {
        FieldDropdownItem,
    },

    props: {
        isRequired: {
            type: Boolean,
            default: false,
        },

        canRequire: {
            type: Boolean,
            default: true,
        },
    },

    emits: ['edit', 'require', 'unrequire', 'clone', 'delete'],

    mounted() {
        Craft.initUiElements();
    },

    methods: {
        selectOption(action) {
            this.$emit(action);
        },
    },
};

</script>
